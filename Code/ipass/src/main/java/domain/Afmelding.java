package domain;

import java.time.LocalDate;
/**
 * Hello world!
 *
 */
import java.util.ArrayList;

public class Afmelding {
    private RoosterRegel regel;
    private Werktijd werktijd;
    private Gebruiker gebruiker;
    private String reden;
    private static ArrayList<Afmelding> afmeldingen = new ArrayList<>();

    public Afmelding(RoosterRegel regel, Werktijd werktijd, Gebruiker gebruiker, String reden){
        if(regel.getDag().compareTo(LocalDate.now()) > 0){
            this.regel = regel;
            this.werktijd = werktijd;
            this.gebruiker = gebruiker;
            this.reden = reden;
    
            werktijd.setPresentieStatus(PresentieStatus.Afwezig);
            addAbsentie();
        }else{
            System.out.println("Werktijd is in het verleden!");
        }
        
    }

    public static ArrayList<Afmelding> getAfmeldingen(){return afmeldingen;}

    public void addAbsentie(){afmeldingen.add(this);}

    public String toString(){
        return String.format("Op %s van %s was %s afwezig door %s.\n", regel.getDag(), werktijd.getTijd(), gebruiker.getNaam(), reden);
    }


}