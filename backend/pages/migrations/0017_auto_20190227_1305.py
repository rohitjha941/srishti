# Generated by Django 2.1.5 on 2019-02-27 13:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0016_auto_20190227_1255'),
    ]

    operations = [
        migrations.AlterField(
            model_name='groupevents',
            name='event_description',
            field=models.TextField(default='', max_length=100000, verbose_name='Event Description'),
        ),
        migrations.AlterField(
            model_name='groupproject',
            name='project_description',
            field=models.TextField(default='', max_length=100000, verbose_name='Event Description'),
        ),
        migrations.AlterField(
            model_name='groups',
            name='description',
            field=models.TextField(default='', max_length=100000, verbose_name='Group Descritption'),
        ),
    ]