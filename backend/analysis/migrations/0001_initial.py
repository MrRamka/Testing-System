# Generated by Django 3.1.7 on 2021-06-08 10:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('core', '0009_auto_20210608_1245'),
    ]

    operations = [
        migrations.CreateModel(
            name='QuestionAnalysis',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('difficult_index', models.FloatField()),
                ('question', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.question')),
            ],
        ),
    ]