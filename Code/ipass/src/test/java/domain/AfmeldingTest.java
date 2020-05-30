package domain;

import static org.junit.Assert.*;

import java.text.ParseException;
import java.time.LocalDate;

import org.junit.Test;
import org.junit.Before;

/**
 * Unit test for simple App.
 */
public class AfmeldingTest {
    private Gebruiker nick = new Gebruiker("nick01", "hey", "nick", "de groot");
    private Werktijd tijd;

    @Before
    public void main() throws ParseException {
        tijd = new Werktijd(nick, "01", "02", "2002", "12:00:00", "13:00:00");
    }

    @Test
    public void afmeldingInThePast() {
        Afmelding afmelding = new Afmelding(new RoosterRegel(LocalDate.now().minusDays(1), tijd), tijd, nick, "sick");
        assertTrue("Array is niet leeg: Afmelding is toegevoegd.", Afmelding.getAfmeldingen().isEmpty());
    }

    @Test
    public void afmeldingInPresent() {
        Afmelding afmelding = new Afmelding(new RoosterRegel(LocalDate.now(), tijd), tijd, nick, "sick");
        assertTrue(Afmelding.getAfmeldingen().isEmpty());
    }

    @Test
    public void afmeldingInTheFuture() {
        Afmelding afmelding = new Afmelding(new RoosterRegel(LocalDate.now().plusDays(1), tijd), tijd, nick, "sick");
        assertFalse(Afmelding.getAfmeldingen().isEmpty());
    }
}
