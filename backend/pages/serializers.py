from .models import *
from rest_framework import serializers



class GroupMembersSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupMembers
        fields =  ("id",'student_name', 'student_designation', 'photo', )


class GroupEventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupEvents
        fields =  ("id",'event_name', 'event_description', )


        
class GroupsSerializer(serializers.ModelSerializer):    
    members = GroupMembersSerializer( many =True, allow_null = True)
    events = GroupEventsSerializer(many =True , )
    class Meta:
        model = Groups
        fields = "__all__"

