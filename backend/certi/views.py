from django.shortcuts import render
from srishti.settings import OAuthClientID, OAuthSecret,BASE_DIR, MEDIA_ROOT
from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
import requests
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404, render
from django.utils.crypto import get_random_string
from rest_framework import generics, mixins, status, viewsets
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse
from .serializers import *
from PIL import Image, ImageDraw, ImageFont
import random
from django.core.files import File
 

def getPos(msg, w, h, draw, font):
        p, q = draw.textsize(msg, font = font)
        return ((w-p)/2)

def GenerateCoreApperiation(name,section,project,certi):
    img = Image.open("./certi/raw_certi/astc.png")
    draw = ImageDraw.Draw(img)
    font = ImageFont.truetype("./certi/raw_certi/bold.ttf", 84)
    w = 3508
    h = 2481
    pos = getPos(msg=name, w=w, h=h, draw=draw ,font = font)
    draw.text(((pos), 1040), name, fill="#552E91", font=font)
    font = ImageFont.truetype("./certi/raw_certi/bold.ttf", 64)
    draw.text((1080, 1220), project, fill="black", font=font)
    draw.text((1980, 1220), section, fill="black", font=font)
    file_name = "/certi/"+ str(certi.username)+ "."+str(random.randint(1,1001))+ ".png"
    save = MEDIA_ROOT + file_name
    img.save(save)
    reopen = open(save, "rb")
    django_file = File(reopen)
    file_name = "." + file_name
    certi.generated_certi.save(file_name, django_file)
    certi.save()
    



 
def GenerateSTCPartipitation(name,section,project,certi):
    img = Image.open("./certi/raw_certi/pstc.png")
    draw = ImageDraw.Draw(img)
    font = ImageFont.truetype("./certi/raw_certi/bold.ttf", 84)
    w = 3508
    h = 2481
    pos = getPos(msg=name, w=w, h=h, draw=draw ,font = font)
    draw.text(((pos), 860), name, fill="#552E91", font=font)
    font = ImageFont.truetype("./certi/raw_certi/bold.ttf", 64)
    draw.text((975, 1070), project, fill="black", font=font)
    draw.text((685, 1200), section, fill="black", font=font)
    file_name = "/certi/"+ str(certi.username)+ "."+str(random.randint(1,1001))+ ".png"
    save = MEDIA_ROOT + file_name
    img.save(save)
    reopen = open(save, "rb")
    django_file = File(reopen)
    file_name = "." + file_name
    certi.generated_certi.save(file_name, django_file)
    certi.save()


def GenerateNonSTCPartipitation(name,section,project,certi):
    img = Image.open("./certi/raw_certi/nonstc.png")
    draw = ImageDraw.Draw(img)
    font = ImageFont.truetype("./certi/raw_certi/bold.ttf", 84)
    w = 3508
    h = 2481
    pos = getPos(msg=name, w=w, h=h, draw=draw ,font = font)
    draw.text(((pos), 860), name, fill="#552E91", font=font)
    font = ImageFont.truetype("./certi/raw_certi/bold.ttf", 64)
    draw.text((975, 1070), project, fill="black", font=font)
    draw.text((685, 1200), section, fill="black", font=font)
    file_name = "/certi/"+ str(certi.username)+ "."+str(random.randint(1,1001))+ ".png"
    save = MEDIA_ROOT + file_name
    img.save(save)
    reopen = open(save, "rb")
    django_file = File(reopen)
    file_name = "." + file_name
    certi.generated_certi.save(file_name, django_file)
    certi.save()



def GenerateSTCCore(name,section,project,certi):
    img = Image.open("./certi/raw_certi/aastc.png")
    draw = ImageDraw.Draw(img)
    font = ImageFont.truetype("./certi/raw_certi/bold.ttf", 84)
    w = 3508
    h = 2481
    pos = getPos(msg=name, w=w, h=h, draw=draw ,font = font)
    draw.text(((pos), 900), name, fill="#552E91", font=font)
    font = ImageFont.truetype("./certi/raw_certi/bold.ttf", 64)
    draw.text((1150, 1100), project, fill="black", font=font)
    pos = getPos(msg=section, w=w, h=h, draw=draw ,font = font)
    draw.text((pos, 1270), section, fill="black", font=font)
    file_name = "/certi/"+ str(certi.username)+ "."+str(random.randint(1,1001))+ ".png"
    save = MEDIA_ROOT + file_name
    img.save(save)
    reopen = open(save, "rb")
    django_file = File(reopen)
    file_name = "." + file_name
    certi.generated_certi.save(file_name, django_file)
    certi.save()
     

def generate_certi(user):
    enroll = user.username
    certis = Certificate.objects.filter(username = enroll)

    for certi in certis:
        certi_type = certi.certificate_type
        name = certi.name
        section = certi.ver
        project = certi.des
        if(certi_type =="STCA"):    
            GenerateSTCCore(name = name, section = section, project = project, certi = certi)
        elif(certi_type =="NonSTC"):    
            GenerateNonSTCPartipitation(name = name, section = section, project = project, certi = certi)
        elif(certi_type =="STCP"):    
            GenerateSTCPartipitation(name = name, section = section, project = project, certi = certi)
        elif(certi_type =="Org"):    
            GenerateCoreApperiation(name = name, section = section, project = project, certi = certi)

class OAuthRedirectView(APIView):
    permission_classes = []
    @staticmethod
    def get(request):

        if request.method == 'GET':
            code = request.GET["code"]
            headers = requests.utils.default_headers()
            headers['User-Agent'] = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
            res1 = requests.post(
                url="http://people.iitr.ernet.in/oauth/gettoken/",
                headers=headers,
                data={
                    "client_id": OAuthClientID,
                    "client_secret": OAuthSecret,
                    "code": code
                })

            if res1.status_code != 200:
                return Response(status=status.HTTP_403_FORBIDDEN)

            res1 = res1.json()
            access_token = res1["access_token"]

            res2 = requests.post(
                url="http://people.iitr.ernet.in/oauth/getuserdata/",
                headers=headers,
                data={
                    "client_id": OAuthClientID,
                    "client_secret": OAuthSecret,
                    "access_token": access_token
                }
            )

            if res2.status_code != 200:
                return Response(status=status.HTTP_403_FORBIDDEN)
            res2 = res2.json()
            user = User.objects.filter(username=res2["username"])
            if user.exists():
                user = User.objects.get(username=res2["username"])
                generate_certi(user = user)

            else:
                user_new = User.objects.create(
                    email=res2["email"],
                    username=res2["username"],
                    first_name=res2["name"]
                )
                unique_id = get_random_string(length=32)
                user_new.set_password(unique_id)
                user_new.save()
                generate_certi(user = user_new)

            user = User.objects.get(username=res2["username"])
            if user is not None:
                login(request, user)
            else:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
            token, created = Token.objects.get_or_create(user=user)
            carrier_data = {
                'token': token.key,
            }
            return Response(carrier_data, status=status.HTTP_202_ACCEPTED)


class UserProfile(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)


class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)
    @staticmethod
    def get(request, format=None):
        request.user.auth_token.delete()
        logout(request)
        return Response(status=status.HTTP_200_OK)





def VerifyCerti(request, id):
    certi = certis = Certificate.objects.get(id = id)
    name = certi.name
    section = certi.ver
    project = certi.des
    res = "<h1> This Certificate belong to " + name + "<br>Project/Position : " + project + "<br> Section Name : " + section 
    return HttpResponse(res)

   