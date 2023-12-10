package Bekap4.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Bekap4.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: ТЧЗаказ
 */
@Entity(name = "IISBekap4ТЧЗаказ")
@Table(schema = "public", name = "ТЧЗаказ")
public class TCHZakaz {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Цена")
    private Integer цена;

    @Column(name = "ЭтоУслуга")
    private Boolean этоуслуга;

    @Column(name = "СуммаНДС")
    private Integer суммандс;

    @Column(name = "Количество")
    private Integer количество;

    @Column(name = "Сумма")
    private Integer сумма;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZakazPost")
    @Convert("ZakazPost")
    @Column(name = "ЗаказПост", length = 16, unique = true, nullable = false)
    private UUID _zakazpostid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZakazPost", insertable = false, updatable = false)
    private ZakazPost zakazpost;

    @OneToMany(mappedBy = "tchzakaz", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Nomenklatura> nomenklaturas;

    @OneToMany(mappedBy = "tchzakaz", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<EdinicyIzmer> edinicyizmers;


    public TCHZakaz() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getЦена() {
      return цена;
    }

    public void setЦена(Integer цена) {
      this.цена = цена;
    }

    public Boolean getЭтоУслуга() {
      return этоуслуга;
    }

    public void setЭтоУслуга(Boolean этоуслуга) {
      this.этоуслуга = этоуслуга;
    }

    public Integer getСуммаНДС() {
      return суммандс;
    }

    public void setСуммаНДС(Integer суммандс) {
      this.суммандс = суммандс;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }

    public Integer getСумма() {
      return сумма;
    }

    public void setСумма(Integer сумма) {
      this.сумма = сумма;
    }


}