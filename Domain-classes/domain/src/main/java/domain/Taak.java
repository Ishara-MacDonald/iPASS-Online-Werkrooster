package domain;

import java.util.ArrayList;

public class Taak {
    private ArrayList<Gebruiker> gebruikers = new ArrayList<>();
    private ArrayList<Werktijd> tijden = new ArrayList<>();    

    private String beschrijving;
    private TaakStatus taakStatus;
    private int totaleUren = 0;

    Taak(String beschrijving){
        this.beschrijving = beschrijving;
        taakStatus = TaakStatus.ToDo;
    }

    public void addTijd(Werktijd tijd){
        long urenErbij = tijd.getBeginTijd().getTime() - tijd.getEindTijd().getTime();
        totaleUren =+ (int)urenErbij;

        tijden.add(tijd);
    }

    public void removeTijd(Werktijd tijd){
        long urenAf = tijd.getBeginTijd().getTime() - tijd.getEindTijd().getTime();
        totaleUren =- (int)urenAf;

        tijden.remove(tijd);
    }


    
}