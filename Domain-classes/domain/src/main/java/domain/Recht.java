package domain;

public class Recht {
    private String recht;
    
    Recht(String recht){
        this.recht = recht;
    }

    /**
     * @param recht the recht to set
     */
    public void setRecht(String recht) {
        this.recht = recht;
    }

    /**
     * @return the recht
     */
    public String getRecht() {
        return recht;
    }
}