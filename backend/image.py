from PIL import Image, ImageDraw, ImageFont
import csv

import random
def getPos(msg, w, h, draw, font):
    p, q = draw.textsize(msg, font = font)
    return ((w-p)/2)

with open('./certi/raw_certi/stca.csv','rt')as f:
  data = csv.reader(f)
  for row in data:
    img = Image.open("./certi/raw_certi/aastc.png")
    draw = ImageDraw.Draw(img)
    font = ImageFont.truetype("./certi/raw_certi/bold.ttf", 84)
    name = row[1]
    section = row[3]
    project = row[2]
    w = 3508
    h = 2481
    pos = getPos(msg=name, w=w, h=h, draw=draw ,font = font)
    draw.text(((pos), 900), name, fill="#552E91", font=font)
    font = ImageFont.truetype("./certi/raw_certi/bold.ttf", 64)
    draw.text((1150, 1100), project, fill="black", font=font)
    pos = getPos(msg=section, w=w, h=h, draw=draw ,font = font)
    draw.text((pos, 1270), section, fill="black", font=font)
    save ="./certi/ASTC/" + row[0]+ "-randon-number-" +str(random.randint(1,101))+ ".png"
    print(save)
    img.save(save)