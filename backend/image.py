from PIL import Image, ImageDraw, ImageFont


def getPos(msg, w, h, draw):
    p, q = draw.textsize(msg)
    return ((w-p)/2)


img = Image.open("test.png")
draw = ImageDraw.Draw(img)
font = ImageFont.truetype("font.ttf", 112)
name = "Rohit"
section = "Tinkering Lab"
w = 3509
h = 2481
pos = getPos(msg=name, w=w, h=h, draw=draw)
draw.text((pos, 990), name, fill="black", font=font)
font = ImageFont.truetype("font.ttf", 64)
draw.text((2000, 1252), section, fill="black", font=font)
img.save('hello.png')
