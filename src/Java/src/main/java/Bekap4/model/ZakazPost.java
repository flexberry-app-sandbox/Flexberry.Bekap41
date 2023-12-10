package Bekap4.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Bekap4.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ЗаказПост
 */
@Entity(name = "IISBekap4ЗаказПост")
@Table(schema = "public", name = "ЗаказПост")
public class ZakazPost {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаОкончания")
    private Date датаокончания;

    @Column(name = "СуммаДокумента")
    private Integer суммадокумента;

    @Column(name = "ДатаНачала")
    private Date датаначала;

    @Column(name = "СуммаВклНДС")
    private Boolean суммавклндс;

    @Column(name = "СостояниеОплаты")
    private String состояниеоплаты;

    @Column(name = "СостОтгрузки")
    private String состотгрузки;

    @OneToMany(mappedBy = "zakazpost", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Organizacii> organizaciis;

    @OneToMany(mappedBy = "zakazpost", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHZakaz> tchzakazs;

    @OneToMany(mappedBy = "zakazpost", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Sklady> skladys;

    @OneToMany(mappedBy = "zakazpost", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Kontragenty> kontragentys;


    public ZakazPost() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаОкончания() {
      return датаокончания;
    }

    public void setДатаОкончания(Date датаокончания) {
      this.датаокончания = датаокончания;
    }

    public Integer getСуммаДокумента() {
      return суммадокумента;
    }

    public void setСуммаДокумента(Integer суммадокумента) {
      this.суммадокумента = суммадокумента;
    }

    public Date getДатаНачала() {
      return датаначала;
    }

    public void setДатаНачала(Date датаначала) {
      this.датаначала = датаначала;
    }

    public Boolean getСуммаВклНДС() {
      return суммавклндс;
    }

    public void setСуммаВклНДС(Boolean суммавклндс) {
      this.суммавклндс = суммавклндс;
    }

    public String getСостояниеОплаты() {
      return состояниеоплаты;
    }

    public void setСостояниеОплаты(String состояниеоплаты) {
      this.состояниеоплаты = состояниеоплаты;
    }

    public String getСостОтгрузки() {
      return состотгрузки;
    }

    public void setСостОтгрузки(String состотгрузки) {
      this.состотгрузки = состотгрузки;
    }


}