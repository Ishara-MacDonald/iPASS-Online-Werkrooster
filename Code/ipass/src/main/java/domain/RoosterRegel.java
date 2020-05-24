package domain;

import java.time.LocalDate;
import java.util.ArrayList;

public class RoosterRegel {
    private LocalDate dag;
    private Werktijd werktijd;
    private static ArrayList<RoosterRegel> regels = new ArrayList<>();

    public RoosterRegel(LocalDate dag, Werktijd tijd){
        this.dag = dag;
        werktijd = tijd;
    }

    public static ArrayList<RoosterRegel> getRegels(){return regels;}

    public LocalDate getDag(){return dag;}
    public Werktijd getTijd(){return werktijd;}

    public String toString(){
        return String.format("%s %s",dag, werktijd);
    }
}