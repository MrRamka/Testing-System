# Generated by Django 3.1.7 on 2021-06-07 21:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_remove_questiontype_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='type',
            field=models.IntegerField(choices=[(0, 'Single'), (1, 'Multiple'), (2, 'Text'), (3, 'Matching'), (4, 'Sequence')], default=0),
        ),
    ]
