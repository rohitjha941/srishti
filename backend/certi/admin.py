from django.contrib import admin
from django.contrib.admin import register
from .models import *
from import_export.admin import ImportExportModelAdmin

@register(Certificate)
class GroupsAdmin(ImportExportModelAdmin):
    list_display = ('username', 'name', 'des', 'ver', 'certificate_type', 'generated_certi', ) 