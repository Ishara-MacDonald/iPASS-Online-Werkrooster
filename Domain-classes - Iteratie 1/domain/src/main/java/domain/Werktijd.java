package domain;

import java.util.ArrayList;
import java.util.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

public class Werktijd {
    private Gebruiker gebruiker;
    private PresentieStatus presentieStatus;
    private Date beginTijd;
    private Date eindTijd;

    private static ArrayList<Werktijd> werkTijden = new ArrayList<>();

    private SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm:ss");

    public Werktijd(Gebruiker gebruiker, String beginTijd, String eindTijd) throws ParseException {
        this.gebruiker = gebruiker;
        this.presentieStatus = PresentieStatus.Aanwezig;
        
        this.beginTijd = convertToDate(beginTijd);
        this.eindTijd = convertToDate(eindTijd);
    }

    public void setPresentieStatus(PresentieStatus presentieStatus){this.presentieStatus = presentieStatus;}
    public void setBeginTijd(Date tijd){beginTijd = tijd;}
    public void setEindTijd(Date tijd){eindTijd = tijd;}

    public void setBeginTijd(String tijd) throws ParseException { this.eindTijd = convertToDate(tijd); }
    public void setEindTijd(String tijd) throws ParseException { this.eindTijd = convertToDate(tijd); }

    public Gebruiker getGebruiker(){return gebruiker;}
    public PresentieStatus getPresentieStatus(){return presentieStatus;}
    public Date getBeginTijd(){return beginTijd;}
    public Date getEindTijd(){return eindTijd;}
    public String getTijd(){return timeFormat.format(beginTijd) + "-"+ timeFormat.format(beginTijd) ;}

    private Date convertToDate(String tijd) throws ParseException{return timeFormat.parse(tijd);}

    public String toString(){return String.format("Tussen %s-%s is %s %s", timeFormat.format(beginTijd),  timeFormat.format(eindTijd), gebruiker.getNaam(), presentieStatus);}
}
