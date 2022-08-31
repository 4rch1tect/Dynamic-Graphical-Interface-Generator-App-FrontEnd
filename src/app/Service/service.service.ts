import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../Model/Produit';
import { Client } from '../Model/Client';
import { Config } from '../Model/Config';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/yass/produits';
  UrlC = "http://localhost:8080/yass/clients";
  Urlcon = "http://localhost:8080/yass/config"

  getProduits() {
    return this.http.get<Produit[]>(this.Url);
  }
  getClients() {
    return this.http.get<Client[]>(this.UrlC);
  }
  getConfigs() {
    return this.http.get<Config[]>(this.Urlcon);
  }
  ajoutProduit(produit: Produit) {
    return this.http.post<Produit>(this.Url, produit);
  }
  ajoutClient(client: Client) {
    return this.http.post<Client>(this.UrlC, client);
  }
  ajoutConfig(config: Config) {
    return this.http.post<Config>(this.Urlcon, config);
  }
  getProduitId(id: number) {
    return this.http.get<Produit>(this.Url + "/" + id);
  }
  getClientId(id: number) {
    return this.http.get<Client>(this.UrlC + "/" + id);
  }
  getConfigId(id: number) {
    return this.http.get<Config>(this.Urlcon + "/" + id);
  }
  updateProduit(produit: Produit) {
    return this.http.put<Produit>(this.Url + "/" + produit.id, produit);
  }
  updateClient(client: Client) {
    return this.http.put<Client>(this.UrlC + "/" + client.id, client);
  }
  updateConfig(config: Config) {
    return this.http.put<Config>(this.Urlcon + "/" + config.id, config);
  }
  deleteProduit(produit: Produit) {
    return this.http.delete<Produit>(this.Url + "/" + produit.id);
  }
  deleteClient(client: Client) {
    return this.http.delete<Client>(this.UrlC + "/" + client.id);
  }
  deleteConfig(config: Config) {
    return this.http.delete<Config>(this.Urlcon + "/" + config.id);
  }
}
