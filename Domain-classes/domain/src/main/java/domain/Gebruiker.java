package domain;

import java.util.ArrayList;

public class Gebruiker {
    private static ArrayList<Gebruiker> allUsers = new ArrayList<>();
    private static int nextGebrNr = 1;

    private ArrayList<Afmelding> afmeldingen = new ArrayList<>();
    private ArrayList<Recht> rechten = new ArrayList<>();

    private PresentieStatus presentie;
    private String gebruikersNaam;
    private String wachtwoord;
    private String naam;

    public Gebruiker(String gebruikersNaam, String wachtwoord, String voornaam, String achternaam){
        this.gebruikersNaam = gebruikersNaam;
        this.wachtwoord = wachtwoord;
        this.naam = voornaam + " " + achternaam;

        nextGebrNr++;
        presentie = PresentieStatus.Aanwezig;
    }

    public static ArrayList<Gebruiker> getAllUsers(){ return allUsers; }

    public String getGebruikersNaam() { return gebruikersNaam; }
    public PresentieStatus getPresentie() { return presentie; }
    public String getWachtwoord() { return wachtwoord; }
    public String getNaam(){return naam;}

    public void setPresentie(PresentieStatus pStatus){this.presentie = pStatus;}

    public static void addUser(Gebruiker gebruiker){ allUsers.add(gebruiker); }

    public void addRecht(Recht recht){rechten.add(recht);}
    public void removeRecht(Recht recht){rechten.remove(recht);}

    public ArrayList<RoosterRegel> procesRooster(){
        ArrayList<RoosterRegel> regels = new ArrayList<>();

        for(RoosterRegel regel : RoosterRegel.getRegels()){
            if(this == regel.getTijd().getGebruiker()){ regels.add(regel); }
        }
        return regels;
    }

    public String toString(){
        return String.format("%s : %s : %s" ,naam,wachtwoord,gebruikersNaam);
    }

}
