# Generated by Django 2.1.5 on 2019-02-13 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0012_auto_20190213_1752'),
    ]

    operations = [
        migrations.AlterField(
            model_name='groupmembers',
            name='email',
            field=models.EmailField(default='', max_length=100),
        ),
    ]
