from tokenize import group

from django.db import models
from django.db.models.fields.related import ForeignKey

# Create your models here.


class Groups(models.Model):
    name = models.CharField(
        default= "",
        max_length = 100,
        verbose_name = "Group Name"
    )

    description = models.TextField(
        default= "",
        max_length = 1000,
        verbose_name = "Group Descritption"
    )

    image = models.ImageField( 
        upload_to="group_images/", 
    )

    def __str__(self):
        return self.name


class GroupMembers(models.Model):

    group = models.ForeignKey(
        Groups,
        on_delete=models.CASCADE,
        blank=True, 
        null=True,
        related_name ="members"
    )
    student_name = models.CharField(
        default= "",
        max_length = 100,
        verbose_name = "Student Name"
    )

    student_designation = models.CharField(
        default= "",
        max_length = 100,
        verbose_name = "Student Designation"
    )

    photo = models.ImageField( 
        upload_to="user_images/", 
    )

class GroupEvents(models.Model):
    group = models.ForeignKey(
        Groups,
        on_delete=models.CASCADE,
        blank=True, 
        null=True,
        related_name ="events"
    )

    event_name = models.CharField(
        default= "",
        max_length = 100,
        verbose_name = "Event Name"
    )

    event_description =  models.TextField(
        default= "",
        max_length = 1000,
        verbose_name = "Event Description"
    )

class Domains(models.Model):
    name = models.CharField(
        default = "",
        max_length = 100
    )

    image = models.ImageField( 
        upload_to="domain_images/", 
    )