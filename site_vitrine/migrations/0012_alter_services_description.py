# Generated by Django 5.1.4 on 2025-02-05 22:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('site_vitrine', '0011_services_image_alter_commentaire_blogs_utilisateur'),
    ]

    operations = [
        migrations.AlterField(
            model_name='services',
            name='description',
            field=models.TextField(max_length=15000, verbose_name='Description'),
        ),
    ]
