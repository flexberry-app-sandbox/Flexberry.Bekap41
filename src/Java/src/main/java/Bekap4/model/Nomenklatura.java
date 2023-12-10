package Bekap4.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Bekap4.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Номенклатура
 */
@Entity(name = "IISBekap4Номенклатура")
@Table(schema = "public", name = "Номенклатура")
public class Nomenklatura {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номенклатура")
    private String номенклатура;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "TCHZakaz")
    @Convert("TCHZakaz")
    @Column(name = "ТЧЗаказ", length = 16, unique = true, nullable = false)
    private UUID _tchzakazid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "TCHZakaz", insertable = false, updatable = false)
    private TCHZakaz tchzakaz;


    public Nomenklatura() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНоменклатура() {
      return номенклатура;
    }

    public void setНоменклатура(String номенклатура) {
      this.номенклатура = номенклатура;
    }


}