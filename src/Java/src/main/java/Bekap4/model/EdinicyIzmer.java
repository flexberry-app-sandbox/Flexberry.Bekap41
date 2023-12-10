package Bekap4.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Bekap4.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ЕдиницыИзмер
 */
@Entity(name = "IISBekap4ЕдиницыИзмер")
@Table(schema = "public", name = "ЕдиницыИзмер")
public class EdinicyIzmer {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ЕдиницаИзмер")
    private String единицаизмер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "TCHZakaz")
    @Convert("TCHZakaz")
    @Column(name = "ТЧЗаказ", length = 16, unique = true, nullable = false)
    private UUID _tchzakazid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "TCHZakaz", insertable = false, updatable = false)
    private TCHZakaz tchzakaz;


    public EdinicyIzmer() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getЕдиницаИзмер() {
      return единицаизмер;
    }

    public void setЕдиницаИзмер(String единицаизмер) {
      this.единицаизмер = единицаизмер;
    }


}