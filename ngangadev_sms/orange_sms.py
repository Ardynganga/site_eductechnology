import http.client
import json
import logging

class Orange_sms:
    def __init__(self,Authorization,):
        self.is_token = False
        self.message_is_send = False
        self.info_token = {}
        self.Authorization = Authorization
        self.conn_access_token = http.client.HTTPSConnection("api.orange.com")
        self.payload_access_token = 'grant_type=client_credentials'
        
        self.headers_access_token = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': self.Authorization,
        'Accept': 'application/json'
        }
        try:
            #--|Récupération de access_token|
            self.conn_access_token.request("POST", "/oauth/v3/token", self.payload_access_token, self.headers_access_token)
            res = self.conn_access_token.getresponse()
            data = res.read()
            data_decode = data.decode("utf-8")
            data_decode = json.loads(data_decode)
            self.info_token = data_decode
            self.is_token = True
            
        except Exception as e:
            logging.error("Une exception s’est produite lors de l’exécution du code: " + repr(e))

    def sendMessage(self,message,receveAddress,senderAddress):
        if(self.is_token == True):
            
            payload = json.dumps({
                "outboundSMSMessageRequest": {
                    "address": "tel:+"+receveAddress,
                    "senderAddress": "tel:+"+senderAddress,
                    "outboundSMSTextMessage": {
                    "message": message
                    }
                }
            })
            headers_send = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ self.info_token['access_token']
            }
            
            try:
                self.conn_access_token.request("POST", "/smsmessaging/v1/outbound/tel%3A%2B"+senderAddress+"/requests", payload, headers_send)
                res = self.conn_access_token.getresponse()
                data = res.read()
                data_res = json.loads(data.decode("utf-8"))
                print(data_res)
                try:
                    ist = data_res['outboundSMSMessageRequest']
                    self.message_is_send = True
                except:
                    ist = data_res['requestError']
                    self.message_is_send = False
                
                return True    
            except:
                return False
        else:
            return False    
            
            
if __name__ == '__main__': 
    _Orange_sms = Orange_sms('Basic T1FQcGc2QlRmRWRDUFB2S0tFUDRuVWs5dHRBM0dURHg6cjZFRGFmVmZmMFpNS3FiTFpWcjVKQUZ1NzJGWkIyTFpvYjNYbG4yaTJRZnI=')
    code = "123456"
    nom_utilisateur = ""
    message = "Idoxy-app \n \nSalut "+ nom_utilisateur +",Voici votre code de réinitialisation : '"+code+" ' Utilisez ce code pour réinitialiser votre mot de passe."
    _Orange_sms.sendMessage(message,'243892518458','243907867868')
    
    if(_Orange_sms.message_is_send == True):
        print('Messsage envoyer')
    else:
        print('Message ne pas envoyer')