package br.com.abim.bestmeal.domain;


import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

import br.com.abim.bestmeal.domain.enumeration.GrupoMenu;

/**
 * A Menu.
 */
@Entity
@Table(name = "menu")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Menu implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "nome")
    private String nome;

    @Enumerated(EnumType.STRING)
    @Column(name = "grupo")
    private GrupoMenu grupo;

    @Column(name = "valor_normal")
    private Double valorNormal;

    @Column(name = "tempo_preparo")
    private Double tempoPreparo;

    @Column(name = "disponivel")
    private Boolean disponivel;

    @Column(name = "valor_reduzido")
    private Double valorReduzido;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public Menu nome(String nome) {
        this.nome = nome;
        return this;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public GrupoMenu getGrupo() {
        return grupo;
    }

    public Menu grupo(GrupoMenu grupo) {
        this.grupo = grupo;
        return this;
    }

    public void setGrupo(GrupoMenu grupo) {
        this.grupo = grupo;
    }

    public Double getValorNormal() {
        return valorNormal;
    }

    public Menu valorNormal(Double valorNormal) {
        this.valorNormal = valorNormal;
        return this;
    }

    public void setValorNormal(Double valorNormal) {
        this.valorNormal = valorNormal;
    }

    public Double getTempoPreparo() {
        return tempoPreparo;
    }

    public Menu tempoPreparo(Double tempoPreparo) {
        this.tempoPreparo = tempoPreparo;
        return this;
    }

    public void setTempoPreparo(Double tempoPreparo) {
        this.tempoPreparo = tempoPreparo;
    }

    public Boolean isDisponivel() {
        return disponivel;
    }

    public Menu disponivel(Boolean disponivel) {
        this.disponivel = disponivel;
        return this;
    }

    public void setDisponivel(Boolean disponivel) {
        this.disponivel = disponivel;
    }

    public Double getValorReduzido() {
        return valorReduzido;
    }

    public Menu valorReduzido(Double valorReduzido) {
        this.valorReduzido = valorReduzido;
        return this;
    }

    public void setValorReduzido(Double valorReduzido) {
        this.valorReduzido = valorReduzido;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Menu)) {
            return false;
        }
        return id != null && id.equals(((Menu) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Menu{" +
            "id=" + getId() +
            ", nome='" + getNome() + "'" +
            ", grupo='" + getGrupo() + "'" +
            ", valorNormal=" + getValorNormal() +
            ", tempoPreparo=" + getTempoPreparo() +
            ", disponivel='" + isDisponivel() + "'" +
            ", valorReduzido=" + getValorReduzido() +
            "}";
    }
}
