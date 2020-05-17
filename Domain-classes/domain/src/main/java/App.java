import domain.*;

import java.text.ParseException;
import java.time.LocalDate;

public class App {
    public static void main(String[] args) throws ParseException {
        Rooster.setRooster(new Rooster());

        Gebruiker gebrGuido = new Gebruiker("gebrGui", "vijf", "Guido", "Bakkers");

        Werktijd werktijd = new Werktijd(gebrGuido, "12:00:00", "12:00:00");
        System.out.println(werktijd);

        RoosterRegel regel = new RoosterRegel(LocalDate.now(), werktijd);

        Afmelding newAfmelding = new Afmelding(regel, werktijd, gebrGuido, "ziekte");

        System.out.println(newAfmelding);
        System.out.println(werktijd);
    }
}
