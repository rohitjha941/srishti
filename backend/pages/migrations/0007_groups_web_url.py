# Generated by Django 2.1.5 on 2019-02-13 16:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0006_auto_20190213_1524'),
    ]

    operations = [
        migrations.AddField(
            model_name='groups',
            name='web_url',
            field=models.URLField(blank=True, null=True),
        ),
    ]
