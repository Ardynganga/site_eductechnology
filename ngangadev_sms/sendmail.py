import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
import os

class SenderMail:
    def __init__(self, smtp_server: str,smtp_port: int,smtp_server_password: str,image_path:str,smtp_server_mail: str):
        self.smtp_server = smtp_server
        self.smtp_port = smtp_port
        self.smtp_server_password = smtp_server_password
        self.smtp_server_mail = smtp_server_mail
        self.image_path = image_path
        
    def sendMail(self,destinataire,emetaire,sujet,html_content):
        # Création de l'e-mail
        message = MIMEMultipart("related")
        message["From"] = emetaire
        message["To"] = destinataire
        message["Subject"] = sujet

        # Ajouter le contenu HTML à l'e-mail
        message_html = MIMEText(html_content, "html")
        message.attach(message_html)

        # Ajouter l'image en tant que pièce jointe et référence cid
        if os.path.exists(self.image_path):
            with open(self.image_path, "rb") as image_file:
                mime_image = MIMEBase("image", "png", filename=os.path.basename(self.image_path))
                mime_image.set_payload(image_file.read())
                encoders.encode_base64(mime_image)
                mime_image.add_header("Content-ID", "<logo_image>")
                mime_image.add_header("Content-Disposition", "inline", filename=os.path.basename(self.image_path))
                message.attach(mime_image)

        # Envoi de l'e-mail
        try:
            server = smtplib.SMTP(self.smtp_server, self.smtp_port)
            server.starttls()
            server.login(self.smtp_server_mail, self.smtp_server_password)
            server.send_message(message)
            
            print("E-mail professionnel envoyé avec succès !")
            return True
            
        except Exception as e:
            print(f"Erreur lors de l'envoi de l'e-mail : {e}")
            return False
        finally:
            server.quit()
        