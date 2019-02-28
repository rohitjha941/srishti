from django.contrib import admin
from django.contrib.admin import register
from .models import *
from import_export.admin import ImportExportModelAdmin

@register(Groups)
class GroupsAdmin(ImportExportModelAdmin):
    list_display = ('name', 'description',  )

@register(GroupMembers)
class GroupMembersAdmin(ImportExportModelAdmin):
    list_display = ('student_name', 'student_designation', 'photo', ) 


@register(GroupEvents)
class GroupMembersAdmin(ImportExportModelAdmin):
    list_display =   ('event_name', 'event_description', )

@register(Domains)
class DomainsAdmin(ImportExportModelAdmin):
    list_display =   ('name', 'image', )


@register(GroupProject)
class DomainsAdmin(ImportExportModelAdmin):
    list_display =  ('project_name', 'project_description', 'project_image', )

@register(Contact)
class DomainsAdmin(ImportExportModelAdmin):
    list_display = ('name', 'email', 'mobile', 'message', )  

@register(HomeProject)
class HomeProjectAdmin(ImportExportModelAdmin):
    list_display = ('name', 'desciptiom' )  

@register(GroupHeader)
class DomainsAdmin(ImportExportModelAdmin):
    list_display =('title', 'description','GroupName' ) 

    def GroupName(self,obj):
        return obj.group.name