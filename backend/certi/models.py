from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, \
    User
from django.db import models
 
from django.contrib.auth.models import User
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)
import uuid


class Certificate(models.Model):

    certiType = (
        ("Self", "Self"),
        ("NonSTC", "NonSTC"),
        ("STCA", "STCA"),
        ("STCP", "STCP"),
        ("Org", "Org"),
    )
    username = models.IntegerField(
        default = 0
    )

    name = models.CharField(
        max_length=200, 
        blank=True, 
        null=True
    )

    des = models.CharField(
        max_length=200, 
        blank=True, 
        null=True
    )

    ver = models.CharField(
        max_length=200, 
        blank=True, 
        null=True
    )

    certificate_type = models.CharField(
        max_length=200, 
        blank=True, 
        null=True,
        choices = certiType
    )
    generated_certi = models.FileField( 
        upload_to="certi/", 
        max_length=1000,
        blank=True, 
        null=True,
    )
