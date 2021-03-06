# Generated by Django 3.1.7 on 2021-06-07 21:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='QuestionType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('type', models.IntegerField(choices=[(0, 'Single'), (1, 'Multiple'), (2, 'Text'), (3, 'Matching'), (4, 'Sequence')], default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=500, null=True)),
                ('image', models.ImageField(upload_to='')),
                ('explanation', models.CharField(max_length=500, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('test', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.test')),
                ('type', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.questiontype')),
            ],
        ),
    ]
