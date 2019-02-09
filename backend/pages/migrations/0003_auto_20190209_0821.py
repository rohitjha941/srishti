# Generated by Django 2.1.5 on 2019-02-09 08:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0002_groupmembers'),
    ]

    operations = [
        migrations.CreateModel(
            name='GroupEvents',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_name', models.CharField(default='', max_length=100, verbose_name='Event Name')),
                ('event_description', models.CharField(default='', max_length=100, verbose_name='Event Description')),
                ('group', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='pages.Groups')),
            ],
        ),
        migrations.AddField(
            model_name='groupmembers',
            name='group',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='pages.Groups'),
        ),
    ]
