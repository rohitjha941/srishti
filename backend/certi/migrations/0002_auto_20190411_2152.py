# Generated by Django 2.1.5 on 2019-04-11 21:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('certi', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='certificate',
            name='generated_certi',
            field=models.FileField(blank=True, max_length=1000, null=True, upload_to='certi/'),
        ),
    ]