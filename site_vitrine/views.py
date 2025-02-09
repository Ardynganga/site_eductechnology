from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.conf import settings
import json
from site_vitrine.models import *
from ngangadev_sms.sendmail import SenderMail
from django.utils import timezone

# Create your views here.
def home(request):

    #Récupération des utilisateur de l'équipe educ
    _Configuration_utilissssateur = Configuration_utilissssateur.objects.filter(is_equipe_educ=1)
    
    #Récupération des articles du blogs
    _Blog = Blog.objects.all()
    
    #Récupération compte utilisateur 
    utilisateur = {
        "connecte" : False
    }
    if request.user:
                
        try :
            _Conf_user = Configuration_utilissssateur.objects.get(utilisateur=request.user)
            utilisateur["user"] = request.user
            utilisateur["conf_user"] = _Conf_user
            utilisateur["connecte"] = True
        except:
            pass
                
        try :
            _Clients = Clients.objects.get(utilisateur=request.user)
            utilisateur["client"] = request._Clients
        except:
            pass
    else:
        pass
    return render(request, "site_vitrine/home.html", {"Configuration_utilissssateur":_Configuration_utilissssateur,"Blogs":_Blog,"utilisateur":utilisateur})

def projets(request):
    _Projets = Projets.objects.all()
    
    utilisateur = {
        "connecte" : False
    }
    if request.user:
                
        try :
            _Conf_user = Configuration_utilissssateur.objects.get(utilisateur=request.user)
            utilisateur["user"] = request.user
            utilisateur["conf_user"] = _Conf_user
            utilisateur["connecte"] = True
        except:
            pass
                
        try :
            _Clients = Clients.objects.get(utilisateur=request.user)
            utilisateur["client"] = request._Clients
        except:
            pass
    else:
        pass
    return render(request, "site_vitrine/projet.html", {"list_projets":_Projets,"utilisateur":utilisateur})

def gestion_messages(request):

    try:
        if request.method == "POST":
            response = {"code": 1}

            try:
                datas_request = json.loads(request.body)
                
                if ( datas_request["action"] == "envoi_message_visiteur_vers_eductechnology"):
                    _SenderMail = SenderMail(
                        smtp_server = "smtp.gmail.com",
                        smtp_port = 587,
                        smtp_server_password = "yhedvueefzqskmhl",
                        image_path = "logo_educ-tech.png",
                        smtp_server_mail = "ardyngangadev@gmail.com"
                    )
                    
                    #Message envoyé che le visiteur
                    html_content = f"""
                        <html>
                            <head>
                                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
                                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQp6o9oTkn1vc8J7XnKxHtwEOf2Q7iHhFI8LGHk3lrwb2AMRkpS5p3E3r" crossorigin="anonymous">

                                <style>
                                    body {{
                                        font-family: Arial, sans-serif;
                                        background-color: #f4f4f4;
                                        margin: 0;
                                        padding: 20px;
                                    }}
                                    .email-container {{
                                        max-width: 600px;
                                        background: #ffffff;
                                        padding: 20px;
                                        border-radius: 10px;
                                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                                        margin: auto;
                                    }}
                                    .header {{
                                        text-align: center;
                                        background-color: #007bff;
                                        color: #ffffff;
                                        padding: 15px;
                                        border-radius: 10px 10px 0 0;
                                    }}
                                    .header h2 {{
                                        margin: 0;
                                    }}
                                    .content {{
                                        margin-top: 20px;
                                        text-align: center;
                                    }}
                                    .services {{
                                        list-style-type: none;
                                        padding: 0;
                                    }}
                                    .services li {{
                                        background: #007bff;
                                        color: #ffffff;
                                        padding: 10px;
                                        margin: 5px;
                                        border-radius: 5px;
                                        font-weight: bold;
                                    }}
                                    .cta {{
                                        margin-top: 20px;
                                        text-align: center;
                                    }}
                                    .cta a {{
                                        display: inline-block;
                                        padding: 10px 20px;
                                        color: #ffffff;
                                        text-decoration: none;
                                        font-size: 16px;
                                        border-radius: 5px;
                                    }}
                                    .btn-success {{
                                        background: #28a745;
                                    }}
                                    .btn-primary {{
                                        background-color: rgb(32, 95, 242);
                                    }}
                                    .btn-secondary {{
                                        background-color:gray;
                                    }}
                                    
                                    .cta a:hover {{
                                        background: #218838;
                                    }}
                                    .footer {{
                                        margin-top: 20px;
                                        font-size: 12px;
                                        text-align: center;
                                        color: #aaa;
                                    }}
                                </style>
                            </head>
                            <body>
                                <div class="email-container">
                                    <div class="header">
                                    <h1>Educ-technology</h1>
                                        <h2>Merci de nous avoir contactés !</h2>
                                    </div>
                                    <div class="content">
                                        <p>Bonjour,</p>
                                        <p>Nous avons reçu votre message envoyé depuis notre site. Rejoignez-nous via l'un des moyens de contact affichés ci-dessous pour approfondir tous vos besoins.</p>
                                        <p>Nous proposons une large gamme de services :</p>
                                        <ul class="services">
                                            <li>Développement Web</li>
                                            <li>Développement Mobile</li>
                                            <li>Développement Desktop</li>
                                            <li>Conception Graphique</li>
                                            <li>Marketing Digital</li>
                                        </ul>
                                        <p>Nous serions ravis de discuter de vos projets et de vous accompagner dans leur réalisation.</p>
                                    </div>
                                    <div class="cta">
                                        
                                        <a href="https://wa.me/243851212843" class="btn btn-success btn-lg" target="_blank">WhatsApp</a>
                                        <a href="https://www.facebook.com/profile.php?id=61571962821801" class="btn btn-primary btn-lg" target="_blank">Facebook</a>
                                        <a class="btn btn-secondary btn-lg" onclick="alert('Appelez-nous au : +243 851 212 843')">+243 851 212 843</a>
                
                                    </div>
                                    <div class="footer">
                                        &copy; 2024 <a href="educ-technology.com">Educ-Technology</a> - Tous droits réservés.
                                    </div>
                                </div>
                            </body>
                        </html>

                    """
                    
                    etat_send_1 = _SenderMail.sendMail(
                        destinataire = datas_request["datas"]["email"] ,
                        emetaire = "infoseductech@gmail.com",
                        sujet = "Accusé de réception de votre message sur notre site officiel.",
                        html_content = html_content
                    )
                    
                    #Message envoyeé chez l'entreprise
                    html_content = f"""
                        <html>
                            <head>
                                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
                                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQp6o9oTkn1vc8J7XnKxHtwEOf2Q7iHhFI8LGHk3lrwb2AMRkpS5p3E3r" crossorigin="anonymous">

                                <style>
                                    body {{
                                        font-family: Arial, sans-serif;
                                        background-color: #f4f4f4;
                                        margin: 0;
                                        padding: 20px;
                                    }}
                                    .email-container {{
                                        max-width: 600px;
                                        background: #ffffff;
                                        padding: 20px;
                                        border-radius: 10px;
                                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                                        margin: auto;
                                    }}
                                    .header {{
                                        text-align: center;
                                        background-color: #007bff;
                                        color: #ffffff;
                                        padding: 15px;
                                        border-radius: 10px 10px 0 0;
                                    }}
                                    .header h2 {{
                                        margin: 0;
                                    }}
                                    .content {{
                                        margin-top: 20px;
                                        text-align: center;
                                    }}
                                    .services {{
                                        list-style-type: none;
                                        padding: 0;
                                    }}
                                    .services li {{
                                        background: #007bff;
                                        color: #ffffff;
                                        padding: 10px;
                                        margin: 5px;
                                        border-radius: 5px;
                                        font-weight: bold;
                                    }}
                                    .cta {{
                                        margin-top: 20px;
                                        text-align: center;
                                    }}
                                    .cta a {{
                                        display: inline-block;
                                        padding: 10px 20px;
                                        color: #ffffff;
                                        text-decoration: none;
                                        font-size: 16px;
                                        border-radius: 5px;
                                    }}
                                    .btn-success {{
                                        background: #28a745;
                                    }}
                                    .btn-primary {{
                                        background-color: rgb(32, 95, 242);
                                    }}
                                    .btn-secondary {{
                                        background-color:gray;
                                    }}
                                    
                                    .cta a:hover {{
                                        background: #218838;
                                    }}
                                    .footer {{
                                        margin-top: 20px;
                                        font-size: 12px;
                                        text-align: center;
                                        color: #aaa;
                                    }}
                                </style>
                            </head>
                            <body>
                                <div class="email-container">
                                    <div class="header">
                                    <h1>Educ-technology</h1>
                                        <h2>Message envoyé par {datas_request['datas']['nom_complet']}</h2>
                                    </div>
                                    <div class="content">
                                        
                                        <p>{datas_request['datas']['message_personnalise']}</p>
                                        
                                        <p>Son adresse électronique est : {datas_request['datas']['email']}</p>
                                    </div><hr>
                                    <div class="footer">
                                        &copy; 2024 <a href="educ-technology.com">Educ-Technology</a> - Tous droits réservés.
                                    </div>
                                </div>
                            </body>
                        </html>

                    """
                    
                    etat_send_2 = _SenderMail.sendMail(
                        destinataire = "infoseductech@gmail.com" ,
                        emetaire = "infoseductech@gmail.com",
                        sujet = "Message venant de www.educ-technology",
                        html_content = html_content
                    )
                    print(etat_send_1 and etat_send_2)
                    if etat_send_1 :
                        print("Tous ok")
                        response["code"] = 0
                   
            except Exception as e:
                print(e)
                pass

            response = json.dumps(response)
            return HttpResponse(
                response,
                headers={
                    "Content-Type": "application/json",
                },
            )
    except Exception as e:
        print(e)
        pass

def blogs_article_detail(request):
    
    if request.user:
                
        try :
            _Conf_user = Configuration_utilissssateur.objects.get(utilisateur=request.user)
            utilisateur["user"] = request.user
            utilisateur["conf_user"] = _Conf_user
            utilisateur["connecte"] = True
        except:
            pass
                
        try :
            _Clients = Clients.objects.get(utilisateur=request.user)
            utilisateur["client"] = request._Clients
        except:
            pass
    else:
        pass
    try:
        if request.method == "POST":
            response = {"code": 1}
            
            datas_request = json.loads(request.body)
                
            if ( datas_request["action"] == "enregistrement_commentaire"):
                

                utilisateur = None
                try:
                    utilisateur = request.user
                    config_user = Configuration_utilissssateur.objects.get(utilisateur=utilisateur)
                    
                except:
                    pass
                
                try:
                    article = Blog.objects.get(id=datas_request['datas']['id_article'])
                    Commentaire_blogs.objects.create(
                        article = article,
                        date = timezone.now(),
                        text = datas_request['datas']['commentaire'],
                        utilisateur = utilisateur
                    )
                    response["code"] = 0
                except:
                    pass
                
            elif ( datas_request["action"] == "ajoute_reaction"):
                try:
                    article = Blog.objects.get(id=datas_request['datas']['id_article'])
                    
                    if datas_request['datas']['reaction'] == "like":
                        article.nbr_jaime_x += 1
                        article.save()
                        response["nbr_jaime_x"] = article.nbr_jaime_x
                    
                    elif datas_request['datas']['reaction'] == "dislike":
                        article.nbr_jaime_y += 1
                        article.save()
                        response["nbr_jaime_y"] = article.nbr_jaime_y
                     
                    response["code"] = 0
                except:
                    pass 
            response = json.dumps(response)
            return HttpResponse(
                response,
                headers={
                    "Content-Type": "application/json",
                },
            )    
        else:
            id_article = request.GET.get('article')
            try:
                _Blog = Blog.objects.get(id=id_article)
                commentaires = Commentaire_blogs.objects.filter(article=_Blog)
                nbr_commentaires = len(commentaires)
                
            except:
                pass
            
            return render(request,'site_vitrine/blogs/article.html',{"article":_Blog,"id_article":id_article,"commentaires":commentaires,"nbr_commentaires":nbr_commentaires,'utilisateur':utilisateur})
    except Exception as e:
        print(e)
        pass

def services(request):
    _Services = Services.objects.all()
    
    #Récupération compte utilisateur 
    utilisateur = {
        "connecte" : False
    }
    if request.user:
                
        try :
            _Conf_user = Configuration_utilissssateur.objects.get(utilisateur=request.user)
            utilisateur["user"] = request.user
            utilisateur["conf_user"] = _Conf_user
            utilisateur["connecte"] = True
        except:
            pass
                
        try :
            _Clients = Clients.objects.get(utilisateur=request.user)
            utilisateur["client"] = request._Clients
        except:
            pass
    else:
        pass
    return render(request, "site_vitrine/services/detail_service.html", {"list_services":_Services,"utilisateur":utilisateur})

def sinscrire(request):
    
    try:
        if request.method == "POST":
            response = {"code": 1}
            datas_request = json.loads(request.body)
            
            
            if ( datas_request["action"] == "creation_compte"):
                
                user = User.objects.filter(email=datas_request["datas"]['email'])
                
                if len(user) == 0:
                    print('--------- 2')
                    user = User.objects.create(
                        username = datas_request["datas"]['email'],
                        email = datas_request["datas"]['email'],
                        password = datas_request["datas"]['password1'],
                        last_name = datas_request["datas"]['nom_ou_raison_social'],
                    )
                    user.save()
                    
                    _Configuration_utilissssateur = Configuration_utilissssateur.objects.create(
                            photo_profil = None,
                            utilisateur = user,
                            profession = "",
                            fonction = None,
                            is_equipe_educ = 0
                    )
                    _Configuration_utilissssateur.save()
                    
                    _Clients = Clients.objects.create(
                        nom_clien = datas_request["datas"]['nom_ou_raison_social'],
                        logo = None,
                        utilisateur = user,
                        type_clien = datas_request["datas"]['nom_ou_raison_social'],
                        telephone = "",
                        adresse = "",
                        description = "",
                        reference = "",
                        lien_site_web =  "",
                        date_inscrit = timezone.now()
                    )
                    _Clients.save()
                    
                    _SenderMail = SenderMail(
                        smtp_server = "smtp.gmail.com",
                        smtp_port = 587,
                        smtp_server_password = "yhedvueefzqskmhl",
                        image_path = "logo_educ-tech.png",
                        smtp_server_mail = "ardyngangadev@gmail.com"
                    )
                    
                    #Message envoyeé chez l'entreprise
                    html_content = f"""
                        <html>
                            <head>
                               
                                <style>
                                    body {{
                                        font-family: Arial, sans-serif;
                                        background-color: #f4f4f4;
                                        margin: 0;
                                        padding: 20px;
                                    }}
                                    .email-container {{
                                        max-width: 600px;
                                        background: #ffffff;
                                        padding: 20px;
                                        border-radius: 10px;
                                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                                        margin: auto;
                                    }}
                                    .header {{
                                        text-align: center;
                                        background-color: #007bff;
                                        color: #ffffff;
                                        padding: 15px;
                                        border-radius: 10px 10px 0 0;
                                    }}
                                    .header h2 {{
                                        margin: 0;
                                    }}
                                    .content {{
                                        margin-top: 20px;
                                    }}
                                    .services {{
                                        list-style-type: none;
                                        padding: 0;
                                    }}
                                    .services li {{
                                        background: #007bff;
                                        color: #ffffff;
                                        padding: 10px;
                                        margin: 5px;
                                        border-radius: 5px;
                                        font-weight: bold;
                                    }}
                                    .cta {{
                                        margin-top: 20px;
                                        text-align: center;
                                    }}
                                    .cta a {{
                                        display: inline-block;
                                        padding: 10px 20px;
                                        color: #ffffff;
                                        text-decoration: none;
                                        font-size: 16px;
                                        border-radius: 5px;
                                    }}
                                    .btn-success {{
                                        background: #28a745;
                                    }}
                                    .btn-primary {{
                                        background-color: rgb(32, 95, 242);
                                    }}
                                    .btn-secondary {{
                                        background-color:gray;
                                    }}
                                    
                                    .cta a:hover {{
                                        background: #218838;
                                    }}
                                    .footer {{
                                        margin-top: 20px;
                                        font-size: 12px;
                                        text-align: center;
                                        color: #aaa;
                                    }}
                                </style>
                            </head>
                            <body>
                                <div class="email-container">
                                    <div class="header">
                                    <h1>Educ-technology</h1>
                                        <h2>🎉 Bienvenue chez Educ-Technology !</h2>
                                    </div>
                                    <div class="content">
                                        
                                        <p>Nous sommes ravis de vous compter parmi nous ! 🎊 Merci d’avoir créé votre compte sur Educ-Technology, votre agence spécialisée en développement et marketing digital. En tant que membre, vous avez désormais accès à nos services, nos offres exclusives et notre assistance dédiée pour vous accompagner dans vos projets numériques</p>
                                        
                                        <h4>🔹 Que faire ensuite ?</h4>
                                        <div>✅ Complétez votre profil pour mieux personnaliser votre expérience.</div>
                                        <div>✅ Découvrez nos services et explorez nos réalisations.</div>
                                        <div>✅ Contactez-nous si vous avez des questions ou un projet à concrétiser.</div>
                                        <div>
                                            Nous restons à votre disposition pour vous aider à atteindre vos objectifs ! 🚀<br>📩 Besoin d’assistance ? N’hésitez pas à nous contacter à infoseductech@gmail.com ou via notre chat en ligne. <br>Encore une fois, bienvenue dans la communauté Educ-Technology !
                                        </div>
                                        
                                        <div class="cta">
                                            <a href="https://wa.me/243851212843" class="btn btn-success btn-lg" target="_blank">WhatsApp</a>
                                            <a href="https://www.facebook.com/profile.php?id=61571962821801" class="btn btn-primary btn-lg" target="_blank">Facebook</a>
                                            <a class="btn btn-secondary btn-lg" onclick="alert('Appelez-nous au : +243 851 212 843')">+243 851 212 843</a>
                                        </div>
                                    </div><hr>
                                    <div class="footer">
                                        &copy; 2024 <a href="educ-technology.com">Educ-Technology</a> - Tous droits réservés.
                                    </div>
                                </div>
                            </body>
                        </html>

                    """
                    
                    etat_send = _SenderMail.sendMail(
                        destinataire = "infoseductech@gmail.com" ,
                        emetaire = "infoseductech@gmail.com",
                        sujet = "🎉 Bienvenue chez Educ-Technology !",
                        html_content = html_content
                    )
                    if etat_send :
                        pass
                    response['code'] = 0
                
                else:
                    response['code'] = 2
            response = json.dumps(response)
            return HttpResponse(
                response,
                headers={
                    "Content-Type": "application/json",
                },
            ) 
        else:
            return render(request,"site_vitrine/comptes/creation_compte.html",{})
    except:
        return HttpResponseRedirect('/')

def reinitialisation_motdepasse(request):
    return render(request,"site_vitrine/comptes/forgot-password.html",{})

def connexion(request):
    
    try:
        if request.method == "POST":
            response = {"code": 1}

            try:
                datas_request = json.loads(request.body)
                print(datas_request)
                if ( datas_request["action"] == "connecte_user"):
                    _user = authenticate(username=datas_request["datas"]["email"],password=datas_request["datas"]["password1"],)
                    _users = User.objects.get(username=datas_request["datas"]["email"])
                    
                    if _users.is_active == True:
                        if _user is not None:
                            login(request=request, user=_user)
                            response["code"] = 0    
                
            except:
                pass
            
            response = json.dumps(response)
            return HttpResponse(
                response,
                headers={
                    "Content-Type": "application/json",
                },
            ) 
        else:
            
            return render(request,"site_vitrine/comptes/login.html",{})
    except:
        return HttpResponseRedirect('/')

def console(request):
    if not request.user.is_authenticated:
        print("utilisateur ne pas connecter")
        return HttpResponseRedirect("/")
    else:
        
        #Récupération compte utilisateur 
        utilisateur = {
            "connecte" : False
        }
        if request.user:
                    
            try :
                _Conf_user = Configuration_utilissssateur.objects.get(utilisateur=request.user)
                utilisateur["user"] = request.user
                utilisateur["conf_user"] = _Conf_user
                utilisateur["connecte"] = True
            except:
                pass
                    
            try :
                _Clients = Clients.objects.get(utilisateur=request.user)
                utilisateur["client"] = request._Clients
            except:
                pass
        else:
            pass
        return render(request,"site_vitrine/comptes/console.html",{"utilisateur":utilisateur})