package Bekap4.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Bekap4.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Склады
 */
@Entity(name = "IISBekap4Склады")
@Table(schema = "public", name = "Склады")
public class Sklady {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Склад")
    private String склад;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZakazPost")
    @Convert("ZakazPost")
    @Column(name = "ЗаказПост", length = 16, unique = true, nullable = false)
    private UUID _zakazpostid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZakazPost", insertable = false, updatable = false)
    private ZakazPost zakazpost;


    public Sklady() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getСклад() {
      return склад;
    }

    public void setСклад(String склад) {
      this.склад = склад;
    }


}