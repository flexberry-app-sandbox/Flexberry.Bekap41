package Bekap4.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Bekap4.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ПланЗакупок
 */
@Entity(name = "IISBekap4ПланЗакупок")
@Table(schema = "public", name = "ПланЗакупок")
public class PlanZakupok {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаНачала")
    private Date датаначала;

    @OneToMany(mappedBy = "planzakupok", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Plan> plans;


    public PlanZakupok() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаНачала() {
      return датаначала;
    }

    public void setДатаНачала(Date датаначала) {
      this.датаначала = датаначала;
    }


}