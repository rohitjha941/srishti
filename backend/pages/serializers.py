from .models import *
from rest_framework import serializers



class GroupMembersSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupMembers
        fields =  ("id",'student_name', 'student_designation', 'photo', "phone","email")


class GroupEventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupEvents
        fields =  ('group', "time",'event_name', 'event_description', 'event_image', 'date', 'location', "id")



class GroupProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupProject
        fields =  ('project_name', 'project_description', 'project_image', )

class GroupHeaderSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupHeader
        fields = ('title', 'description', 'id' )

        
class GroupsSerializer(serializers.ModelSerializer):    
    members = GroupMembersSerializer( many =True, allow_null = True)
    events = GroupEventsSerializer(many =True ,  allow_null = True)
    projects = GroupProjectsSerializer(many = True,)
    header = GroupHeaderSerializer(many = True)
    class Meta:
        model = Groups
        fields = "__all__"
         



class DomainSerializers(serializers.ModelSerializer):
    class Meta:
        model = Domains
        fields = "__all__"


class  ContactSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = Contact
        fields = "__all__"
