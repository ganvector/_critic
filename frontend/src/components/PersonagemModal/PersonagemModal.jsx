import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FichaDestaque from './FichaDestaque/FichaDestaque';
import FichaAtributos from './FichaAtributos/FichaAtributos';
import FichaTesteResistencia from './FichaTesteResistencia/FichaTesteResistencia';
import FichaPericias from './FichaPericias/FichaPericias';
import FichaProficiencias from './FichaProficiencias/FichaProficiencias';
import FichaDadosDeVidaAtual from './FichaDadosDeVida/FichaDadosDeVidaAtual'
import FichaDadosDeVidaTotal from './FichaDadosDeVida/FichaDadosDeVidaTotal';
import FichaTesteCMorte from './FichaTesteCMorte/FichaTesteCMorte'; //TODO fazer o resto disso
// STYLES
import './PersonagemModal.scss'
import { OverlayTrigger } from 'react-bootstrap';
const data = {
  img: "https://66.media.tumblr.com/50d79afb983692a4bd0f6edb17239d23/tumblr_papmsfljGX1r14dt9o2_250.png",
  nome: "Milliardo",
  classes: [
    { nome: 'Bruxo', nivel: '15' },
    { nome: 'Guerreiro', nivel: '5' }
  ],
  antecedente: 'Héroi Renegado',
  playerName: "Vitor",
  racaNome: 'Meio-Elfo',
  tendencia: 'CB',
  experiencia: 8000,
  atr_base: {
    for: 18,
    des: 14,
    con: 15,
    int: 10,
    sab: 12,
    car: 20
  },
  atr_mod: {
    for: 4,
    des: 2,
    con: 3,
    int: 0,
    sab: 1,
    car: 5
  },
  inspiracao: '0',
  proficiencia: '8',
  teste_res: {
    for: false,
    des: false,
    con: false,
    int: false,
    sab: true,
    car: true,
  },
  teste_res_val: {
    for: 4,
    des: 2,
    con: 3,
    int: 0,
    sab: 9,
    car: 13
  },
  pericia_prof: {
    acrobacia: false,
    arcanismo: false,
    atletismo: false,
    atuacao: false,
    blefar: false,
    furtividade: false,
    historia: false,
    intimidacao: true,
    intuicao: false,
    investigacao: true,
    lidarComAnimais: false,
    medicina: false,
    natureza: false,
    percepcao: true,
    persuasao: true,
    prestidigitacao: true,
    religiao: false,
    sobrevivencia: true,
  },

  pericia_val: {
    acrobacia: 2,
    arcanismo: 0,
    atletismo: 4,
    atuacao: 5,
    blefar: 5,
    furtividade: 2,
    historia: 0,
    intimidacao: 13,
    intuicao: 1,
    investigacao: 8,
    lidarComAnimais: 5,
    medicina: 1,
    natureza: 1,
    percepcao: 9,
    persuasao: 13,
    prestidigitacao: 10,
    religiao: 0,
    sobrevivencia: 9,
  },
  lstProficiencias: {
    idiomas: ['Comum', 'Elfico', 'Goblin'],
    ferramentas: ['Ferramentas de Ferreiro', 'Ferramentas de Artesão'],
    armas: ['Simples', 'Marciais', 'Arcos']
  },
  classDeArmadura: 18,
  iniciativa: 20,
  deslocamento: 10.5,
  pvMax: 200,
  pvAtual: 185,
  pvTemp: 0,
  dadosDeVidaTotal: [
    {
      classe: 'Bruxo',
      dado: 'D8',
      qtd: 15
    },
    {
      classe: 'Guerreiro',
      dado: 'D10',
      qtd: 5
    }
  ],
  dadosDeVidaAtual: [
    {
      classe: 'Bruxo',
      dado: 'D8',
      qtd: 13,
    },
    {
      classe: 'Guerreiro',
      dado: 'D10',
      qtd: 3,
    }
  ],
  testeContraMorte: {
    sucesso: 2,
    falhas: 2
  }
}

class PersonagemModal extends Component {
  state = {
    show: true,
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  render() {
    return (
      <Modal
        show={this.state.show}
        dialogClassName="Modal90w"
        onHide={this.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Ficha de Personagem</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <FichaDestaque data={data} />
                <Row>
                  <Col className="ModalCol red">
                    <Row>
                      <FichaAtributos data={data} />
                      <Col style={{ marginLeft: "8px" }}>
                        <Row className="LineDescription">
                          <Col md={3} className="AtributoMod">{data.inspiracao}</Col>
                          <Col><div className="AtributoNome">INSPIRAÇÂO</div></Col>
                        </Row>
                        <Row className="LineDescription" style={{ marginTop: "19px" }}>
                          <Col md={3} className="AtributoMod">{data.proficiencia}</Col>
                          <Col><div className="AtributoNome" style={{ fontSize: "10px" }}>BÔNUS DE PROFICIÊNCIA</div></Col>
                        </Row>
                        <Row style={{ height: "200px", marginTop: "17px", border: "3px solid orange" }}>
                          <FichaTesteResistencia data={data} />
                        </Row>
                        <Row style={{ height: "530px", marginTop: "18px", border: "3px solid orange" }}>
                          <FichaPericias data={data} />
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row className="LineDescription" style={{ marginTop: "8px" }}>
                          <Col className="AtributoMod" md={2}>{data.pericia_val.percepcao + 10}</Col>
                          <Col><div className="AtributoNome">SABEDORIA PASSIVA</div></Col>
                        </Row>
                        <Row className="RowFichaProficiencia">
                          <FichaProficiencias data={data} />
                        </Row>
                      </Col>
                    </Row>
                  </Col>

                  <Col className="ModalCol green">
                    <Row className="SecondColRow">
                      <Col className="ca-ini-des">
                        <Row>
                          <Col className="AtributoNome">
                            CLASSE DE ARMADURA
                          </Col>
                        </Row>
                        <Row>
                          <Col className="AtributoBase">
                            {data.classDeArmadura}
                          </Col>
                        </Row>
                      </Col>
                      <Col className="ca-ini-des" style={{ marginLeft: "2%", marginRight: "2%" }}>
                        <Row>
                          <Col className="AtributoNome" style={{ fontSize: "12px" }}>
                            INICIATIVA
                          </Col>
                        </Row>
                        <Row>
                          <Col className="AtributoBase">
                            {data.iniciativa}
                          </Col>
                        </Row>
                      </Col>
                      <Col className="ca-ini-des">
                        <Row>
                          <Col className="AtributoNome">
                            DESLOCAMENTO
                          </Col>
                        </Row>
                        <Row>
                          <Col className="AtributoBase">
                            {data.deslocamento}m
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="PV-Atual">
                      <Col>
                        <Row style={{ marginTop: "10px" }}>
                          <Col md={7} className="PV-Max">
                            PONTOS DE VIDA MAXIMOS
                          </Col>
                          <Col className="PV-Max" style={{ textDecoration: "underline" }}>
                            {data.pvMax}
                          </Col>
                        </Row>
                        <Row>
                          <Col className="AtributoBase">
                            {data.pvAtual}
                          </Col>
                        </Row>
                        <Row>
                          <Col className="AtributoNome">
                            PONTOS DE VIDA ATUAIS
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="PV-Temp">
                      <Col>
                        <Row>
                          <Col className="AtributoBase">
                            {data.pvTemp}
                          </Col>
                        </Row>
                        <Row>
                          <Col className="AtributoNome">
                            PONTOS DE VIDA TEMPORARIOS
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="RowVidaMorte">
                      <Col className="ColVida">
                        <FichaDadosDeVidaTotal data={data.dadosDeVidaTotal} />
                        <Row>
                          <FichaDadosDeVidaAtual data={data.dadosDeVidaAtual} />
                        </Row>
                        <Row>
                          <Col className="AtributoNome">
                            DADOS DE VIDA
                          </Col>
                        </Row>
                      </Col>
                      <Col className="ColMorte">
                        <Row>
                          <FichaTesteCMorte sucessos={data.testeContraMorte.sucesso} falhas={data.testeContraMorte.falhas} />
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>Ataques e Magias</Col>
                    </Row>
                    <Row>
                      <Col>Equipamentos</Col>
                    </Row>
                  </Col>

                  <Col className="ModalCol blue" style={{ marginRight: "20px" }}>
                    <Row>
                      <Col>
                        <Row>
                          <Col>
                            Tracos de Personalidade
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            Ideais
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            Vinculos
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            Fraquezas
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>Caracteristicas e Traços</Col>
                    </Row>
                  </Col>

                </Row>

              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }

}

export default PersonagemModal;