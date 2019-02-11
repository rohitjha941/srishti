from .serializers import *
from .models import *
from rest_framework import generics, mixins, status, viewsets


class ListGroup(generics.ListAPIView):
    queryset = Groups.objects.all()
    serializer_class = GroupsSerializer

class DomainList(generics.ListAPIView):
    queryset = Domains.objects.all()
    serializer_class = DomainSerializers
