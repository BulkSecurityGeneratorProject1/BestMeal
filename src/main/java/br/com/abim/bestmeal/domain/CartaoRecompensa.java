package br.com.abim.bestmeal.domain;


import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

import br.com.abim.bestmeal.domain.enumeration.SituacaoCartao;

/**
 * A CartaoRecompensa.
 */
@Entity
@Table(name = "cartao_recompensa")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class CartaoRecompensa implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "numero")
    private String numero;

    @Column(name = "validade")
    private String validade;

    @Column(name = "pontuacao")
    private Integer pontuacao;

    @Enumerated(EnumType.STRING)
    @Column(name = "situacao")
    private SituacaoCartao situacao;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNumero() {
        return numero;
    }

    public CartaoRecompensa numero(String numero) {
        this.numero = numero;
        return this;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getValidade() {
        return validade;
    }

    public CartaoRecompensa validade(String validade) {
        this.validade = validade;
        return this;
    }

    public void setValidade(String validade) {
        this.validade = validade;
    }

    public Integer getPontuacao() {
        return pontuacao;
    }

    public CartaoRecompensa pontuacao(Integer pontuacao) {
        this.pontuacao = pontuacao;
        return this;
    }

    public void setPontuacao(Integer pontuacao) {
        this.pontuacao = pontuacao;
    }

    public SituacaoCartao getSituacao() {
        return situacao;
    }

    public CartaoRecompensa situacao(SituacaoCartao situacao) {
        this.situacao = situacao;
        return this;
    }

    public void setSituacao(SituacaoCartao situacao) {
        this.situacao = situacao;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof CartaoRecompensa)) {
            return false;
        }
        return id != null && id.equals(((CartaoRecompensa) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "CartaoRecompensa{" +
            "id=" + getId() +
            ", numero='" + getNumero() + "'" +
            ", validade='" + getValidade() + "'" +
            ", pontuacao=" + getPontuacao() +
            ", situacao='" + getSituacao() + "'" +
            "}";
    }
}
