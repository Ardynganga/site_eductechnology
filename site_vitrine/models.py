from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Fonctions(models.Model):
    libelle = models.CharField(max_length=100,verbose_name="Libellé")
    code = models.CharField(max_length=100,verbose_name="Code")
    description = models.CharField(max_length=100,verbose_name="Description")
    date_inscrit = models.DateField()
    
    def __str__(self):
        return '%s' % (self.libelle)
    
class Configuration_utilissssateur(models.Model):
    si_il_fait_partir_de_lequipe_educ = [
        (1,"OUi"),
        (0,"Non"),
    ]
    photo_profil = models.ImageField(null=True,verbose_name="Photo profil")
    utilisateur = models.ForeignKey(User, on_delete=models.CASCADE,null=True,verbose_name="Utilisateur")
    profession = models.CharField(max_length=100,verbose_name="Profession")
    fonction = models.ForeignKey(Fonctions, on_delete=models.CASCADE,null=True,verbose_name="Fonction")
    is_equipe_educ = models.IntegerField(null=True,choices=si_il_fait_partir_de_lequipe_educ,verbose_name="L'utilisateur fait partir de l'équipe d'Educ-technology")
    
    def __str__(self):
        return '%s | %s | %s' % (self.utilisateur,self.fonction,self.is_equipe_educ)
class Site(models.Model):
    nom = models.CharField(max_length=100,verbose_name="Nom du site")
    titre = models.CharField(max_length=100,verbose_name="Titre du site")
    sloga = models.CharField(max_length=100,verbose_name="Sloga du site")
    description = models.CharField(max_length=100,verbose_name="Description du site")
    logo = models.ImageField(null=True,verbose_name="Logo")

class Blog(models.Model):
    image = models.ImageField(null=False,verbose_name="Image de l'article")
    titre = models.CharField(max_length=100,verbose_name="Titre du site")
    sous_titre = models.CharField(max_length=100,verbose_name="Sous Titre du site")
    description = models.TextField(max_length=10000,verbose_name="Description de l'article")
    nombre_vues = models.IntegerField(null=True,verbose_name="Nombre vue")
    date_publication = models.DateField(verbose_name="Date du publication de l'article")
    categorie = models.CharField(max_length=100,verbose_name="Catégorie de l'article")
    nbr_jaime_x = models.IntegerField(null=True,verbose_name="Notre de j'aime pour cette article")
    nbr_jaime_y = models.IntegerField(null=True,verbose_name="Nombre de ce qui n'ont pas aimé")
    utilisateur = models.ForeignKey(User, on_delete=models.CASCADE,null=True,verbose_name="Auteur")

class Commentaire_blogs(models.Model):
    article = models.ForeignKey(Blog, on_delete=models.CASCADE,null=True,verbose_name="Article")
    date = models.DateField(verbose_name="Date du commentaire")
    text = models.TextField(max_length=10000,verbose_name="commentaire")
    utilisateur = models.ForeignKey(User, on_delete=models.CASCADE,null=True,verbose_name="Utilisateur")
    
    def __str__(self):
        return '%s | %s | %s ' % (self.article,self.date,self.utilisateur)
    
class Galerie(models.Model):
    
    list_type_fichiers = [
        ('0',"Image"),
        ('1',"Document"),
        ('2',"Video"),
        ('3',"Audio")
    ]
    titre = models.CharField(max_length=100,verbose_name="Titre")
    description_courte = models.CharField(max_length=100,verbose_name="Description Courte")
    description = models.CharField(max_length=100,verbose_name="Description logn")
    date_creer = models.DateField(verbose_name="Date")
    fichier = models.BinaryField()
    type_fichier = models.CharField(max_length=100,verbose_name="Type du fichier",choices=list_type_fichiers)
    nbr_jaime_x = models.IntegerField(null=True,verbose_name="Notre de j'aime pour cette article")
    nbr_jaime_y = models.IntegerField(null=True,verbose_name="Nombre de ce qui n'ont pas aimé")
    
class Clients(models.Model):
    
    list_type_client = [
        ('Particulier',"Particulier"),
        ('Société',"Société"),
        ('Organisation',"Organisation"),
    ]
    nom_clien = models.CharField(max_length=100,verbose_name="Nom client",null=True)
    logo = models.ImageField(null=True,verbose_name="Logo société ou particulier")
    utilisateur = models.ForeignKey(User, on_delete=models.CASCADE,null=True,verbose_name="Utilisateur")
    type_clien = models.CharField(max_length=100,verbose_name="Type du fichier",choices=list_type_client)
    telephone = models.CharField(max_length=100,verbose_name="Numéro de téléphone")
    adresse = models.CharField(max_length=100,verbose_name="Adresse physique du client")
    description = models.CharField(max_length=100,verbose_name="Description du client")
    reference = models.CharField(max_length=100,verbose_name="Référence du client")
    lien_site_web =  models.CharField(max_length=100,null=True,verbose_name="Lien site internet")
    date_inscrit = models.DateField()
    
    def __str__(self):
        return '%s | %s' % (self.nom_clien,self.type_clien)
    
class Services(models.Model):
    icon = models.CharField(max_length=100,verbose_name="Icone",help_text="Icone fontawson au format htmp exemple : <i class='fas fa-users'></i>")
    image = models.ImageField(null=True)
    libelle = models.CharField(max_length=100,verbose_name="Libelle Service")
    titre = models.CharField(max_length=100,verbose_name="Titre du Service")
    description = models.TextField(max_length=15000,verbose_name="Description")
    date_ajouter = models.DateField()
    
    def __str__(self):
        return '%s' % (self.libelle)

class Produits(models.Model):
    icon = models.CharField(max_length=100,verbose_name="Icone",help_text="Icone fontawson au format htmp exemple : <i class='fas fa-users'></i>")
    libelle = models.CharField(max_length=100,verbose_name="Libelle Produit")
    titre = models.CharField(max_length=100,verbose_name="Titre du Produit")
    description = models.CharField(max_length=100,verbose_name="Description")
    lien_site_web = models.CharField(max_length=100,verbose_name="Description")
    date_ajouter = models.DateField()
    
class Projets(models.Model):
    image = models.ImageField(null=True,verbose_name="Image ou logo du projet")
    reference= models.CharField(max_length=100,verbose_name="Référence du projet")
    service = models.ForeignKey(Services, on_delete=models.CASCADE,null=True,verbose_name="Service")
    client = models.ForeignKey(Clients, on_delete=models.CASCADE,null=True,verbose_name="Cliet")
    libelle = models.CharField(max_length=100,verbose_name="Libellé du projet")
    Budget = models.IntegerField(help_text="En dollar ($)")
    date_du_debut = models.DateField()
    date_du_fin = models.DateField()
    description = models.CharField(max_length=100,verbose_name="Description du projet")
    email_a_contacter =  models.CharField(max_length=100,verbose_name="Adresse mail du responsable à contacter pour cette projet")
    telephone = models.CharField(max_length=100,verbose_name="Téléphone")
    evolution_du_projet = models.IntegerField(null=True,verbose_name="Evolution du projet en pourçentange")
    date_ajouter = models.DateField()
    
    def __str__(self):
        return '%s | %s' % (self.libelle,self.evolution_du_projet)
    
