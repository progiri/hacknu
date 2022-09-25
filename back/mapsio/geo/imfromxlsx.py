from cmath import nan
import pandas as pd
from .models import GeoDataPacket
from django.contrib.gis.geos import Point
import numpy as np
import pyexcel


class GetDataFromExcel:
    def __init__(self) -> None:
        self.book_dict = pyexcel.get_book_dict(file_name="/home/progiri/hacknu-prod-data.xlsx")
        self.data = self.parse()

    def parse(self):
        result = {}

        for dat in self.book_dict:
            for i, d in enumerate(self.book_dict[dat]):
                con = 0
                if i == 0: continue
                for n in d: 
                    if n == '': continue
                    else: con += 1

                    if con > 0:
                        if result.get(dat):
                            result[dat].append(d)
                        else:
                            result[dat] = [d]
        return result

    def fill_db(self):
        for sheet in self.data:
            for data in self.data[sheet]:
                try:
                    print(data[0], data[1], data[2])
                    geom = GeoDataPacket.objects.create(
                        point=Point(data[0], data[1], data[2] if data[2] != "null" else 0),
                        identifier=data[3] if data[3] != "null" else None,
                        timestamp=data[4] if data[4] != "null" else None,
                        floor_label=data[5] if data[5] != "null" else None,
                        hor_accuracy=data[6] if data[6] != "null" else None,
                        ver_accuracy=data[7] if data[7] != "null" else None,
                        cil_accuracy=data[8] if data[8] != "null" else None,
                        activity=data[9] if data[9] != "null" else None,
                        dev=sheet
                    )
                    print(geom)
                except TypeError as e:
                    print(f"Type Error: {e}")
                except Exception as e:
                    print(f"Error: {e}")
