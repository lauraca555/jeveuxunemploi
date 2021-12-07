import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 background = {
   "background-color" : "#E5E5E5",
   "font-size" : "1.5em",
 }

 background2 = "red";

  title = 'Recherche d\'emploi';
  candidatures = [
    {
      'nom' : 'open', 
      'poste' : 'Développeur/Concepteur Java', 
      'dateCandidature' : "18/11/2021", 
      "dateReponse" : "", 
      "observation" : "", 
      "lien" : "https://www.expectra.fr/offre/307-s38-r000633_01r/developpeur_web_f_h/?utm_source=cadremploi&utm_medium=jobboard&utm_campaign=offres%3futm_source=linkedin&utm_medium=jobboard&utm_campaign=offres",
      "finish" : "waiting"
    },
    {
      'nom' : 'expectra', 
      'poste' : 'Développeur Web', 
      'dateCandidature' : "29/12/2021", 
      "dateReponse" : "", 
      "observation" : "", 
      "lien" : "https://www.expectra.fr/offre/307-s38-r000633_01r/developpeur_web_f_h/?utm_source=cadremploi&utm_medium=jobboard&utm_campaign=offres%3futm_source=linkedin&utm_medium=jobboard&utm_campaign=offres",
      "finish" : "waiting"
    },
    {
      'nom' : 'Pickbean', 
      'poste' : 'Développeur Web', 
      'dateCandidature' : "29/12/2021", 
      "dateReponse" : "", 
      "observation" : "Agence à Diane St Simon", 
      "lien" : "https://www.linkedin.com/jobs/view/2813979200/?refId=C5pMVfDRDSzkcg7yMes3Ng%3D%3D&trackingId=Pro76DukETCdXY3qmBaD%2Fg%3D%3D",
      "finish" : "waiting"
    },
    {
      'nom' : 'Safti', 
      'poste' : 'Développeur Web', 
      'dateCandidature' : "29/12/2021", 
      "dateReponse" : "2/12/2021", 
      "observation" : "", 
      "lien" : "https://www.linkedin.com/jobs/view/2808141225/?refId=bKd9XV4aZ05NrM2lEUT4rg%3D%3D&trackingId=5UCNaCYmmiC3Pa5edNgX4A%3D%3D",
      "finish" : "false"
    },
    {
      'nom' : 'W2p Digital', 
      'poste' : 'Développeur Web', 
      'dateCandidature' : "29/12/2021", 
      "dateReponse" : "01/11/2021", 
      "observation" : "", 
      "lien" : "",
      "finish" : "false"
    },
    {
      'nom' : 'OnePoint', 
      'poste' : 'Développeur Web', 
      'dateCandidature' : "30/12/2021", 
      "dateReponse" : "", 
      "observation" : "Contacté par Linkdin Loic", 
      "lien" : "",
      "finish" : "waiting"
    },
    {
      'nom' : 'Squad', 
      'poste' : 'Développeur php', 
      'dateCandidature' : "30/12/2021", 
      "dateReponse" : "", 
      "observation" : "", 
      "lien" : "",
      "finish" : "waiting"
    },   
    {
      'nom' : 'OpenStudio', 
      'poste' : 'Développeur php', 
      'dateCandidature' : "30/12/2021", 
      "dateReponse" : "06/12/2021", 
      "observation" : "", 
      "lien" : "https://www.linkedin.com/jobs/view/2802537031/?midToken=AQHOJ_bdUuko1Q&midSig=3knApZ-m4nEW01&trk=eml-jobs_applicant_applied-applied_jobs-16-applied_job&trkEmail=eml-jobs_applicant_applied-applied_jobs-16-applied_job-null-6fsy8d%7Ekwm7rs3m%7Ehw-null-jobs%7Eview",
      "finish" : "false"
    },  
    {
      'nom' : 'Infotel', 
      'poste' : 'Développeur php', 
      'dateCandidature' : "06/12/2021", 
      "dateReponse" : "", 
      "observation" : "contact avec Chloé Biasucci sur Linkdin. Nina a transmit mon cv", 
      "lien" : "https://www.linkedin.com/in/chlo%C3%A9-biasucci/",
      "finish" : "waiting"
    }, 
  ]

}
