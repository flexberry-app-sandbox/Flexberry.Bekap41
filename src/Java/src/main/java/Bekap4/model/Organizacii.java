package Bekap4.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Bekap4.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Организации
 */
@Entity(name = "IISBekap4Организации")
@Table(schema = "public", name = "Организации")
public class Organizacii {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Организация")
    private String организация;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZakazPost")
    @Convert("ZakazPost")
    @Column(name = "ЗаказПост", length = 16, unique = true, nullable = false)
    private UUID _zakazpostid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZakazPost", insertable = false, updatable = false)
    private ZakazPost zakazpost;


    public Organizacii() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getОрганизация() {
      return организация;
    }

    public void setОрганизация(String организация) {
      this.организация = организация;
    }


}