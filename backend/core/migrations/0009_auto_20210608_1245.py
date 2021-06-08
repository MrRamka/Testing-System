# Generated by Django 3.1.7 on 2021-06-08 09:45

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('core', '0008_answer'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='answer',
            name='user',
        ),
        migrations.CreateModel(
            name='UserAnswer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('duration', models.TimeField()),
                ('answer', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.answer')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
