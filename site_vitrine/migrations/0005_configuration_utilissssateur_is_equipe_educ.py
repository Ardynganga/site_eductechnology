# Generated by Django 5.1.4 on 2025-01-31 08:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('site_vitrine', '0004_configuration_utilissssateur_photo_profil'),
    ]

    operations = [
        migrations.AddField(
            model_name='configuration_utilissssateur',
            name='is_equipe_educ',
            field=models.IntegerField(choices=[(1, 'OUi'), (0, 'Non')], null=True, verbose_name="L'utilisateur fait partir de l'équipe d'Educ-technology"),
        ),
    ]
