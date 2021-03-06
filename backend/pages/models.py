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
        max_length = 10000,
        verbose_name = "Group Descritption"
    )

    image = models.ImageField( 
        upload_to="group_images/",
        blank=True, null=True 
    )

    card_image =  models.ImageField( 
        upload_to="group_images/", 
        blank=True, null=True
    )

    logo = models.ImageField( 
        upload_to="group_images/",
        blank=True, null=True
    )

    web_url = models.URLField(
        max_length=200,
        blank=True, null=True
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
    phone =models.CharField(
        default = "",
        max_length = 100
    )

    email = models.EmailField(
        default = "",
        max_length = 100
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
        max_length = 10000,
        verbose_name = "Event Description"
    )
    event_image =  models.ImageField( 
        upload_to="event_images/",
        blank=True, null=True
    ) 

    date = models.DateField(
        blank=True, 
        null=True,
    )
    time = models.TimeField(blank=True, null=True, auto_now=False, auto_now_add=False)
    location = models.CharField(
        default= "",
        max_length = 100,
        verbose_name = "Event Location"
    )



class GroupProject(models.Model):
    group = models.ForeignKey(
        Groups,
        on_delete=models.CASCADE,
        blank=True, 
        null=True,
        related_name ="projects"
    )

    project_name = models.CharField(
        default= "",
        max_length = 100,
        verbose_name = "Event Name"
    )

    project_description =  models.TextField(
        default= "",
        max_length = 10000,
        verbose_name = "Event Description"
    )
    project_image =  models.ImageField( 
        upload_to="event_images/",
        blank=True, null=True
    )
    



class GroupHeader(models.Model):
    group = models.ForeignKey(
        Groups,
        on_delete=models.CASCADE,
        blank=True, 
        null=True,
        related_name ="header"
    )

    title = models.CharField( 
        max_length=5000,
        default = ""
    )


    description = models.CharField( 
        max_length=50000,
        default = ""
    )



class Domains(models.Model):
    name = models.CharField(
        default = "",
        max_length = 100
    )

    image = models.ImageField( 
        upload_to="domain_images/", 
    )


class Contact(models.Model):

    name =  models.CharField(
        default = "",
        max_length = 100
    )

    email = models.CharField(
        default = "",
        max_length = 100
    )

    mobile = models.CharField(
        default = "",
        max_length = 100
    )

    message = models.CharField(
        default = "",
        max_length = 100
    )
    

class HomeProject(models.Model):
    name = models.CharField(
        default = "",
        max_length = 100
    )

    desciptiom = models.CharField(
        default = "",
        max_length = 10000
    )

    image = models.ImageField( 
        upload_to="home_project_images/", 
    )