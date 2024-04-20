import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

export const PdfGenerator = ({ data }) => {

  console.log(data);
  return (
    <Document>
      <Page size="A4">
        <View sclas>
          <Text className ="ttle">Encierro</Text>
          <Text style={styles.label}>ID: {data.id}</Text>
          <Text style={styles.label}>Nombre: {data.name}</Text>
          <Text style={styles.label}>Tipo de Alimento: {data.typeOfFood}</Text>
          <Text style={styles.label}>Vacuna: {data.vaccine}</Text>
          <Text style={styles.label}>UserID: {data.userId}</Text>
          {data.datos && data.datos.map((dato) => (
            <View key={dato.id}>
              <Text style={styles.label}>Fecha: {dato.date}</Text>
              <Text style={styles.label}>Temperatura: {dato.temperature}</Text>
              <Text style={styles.label}>Humedad: {dato.humidity}</Text>
              <Text style={styles.label}>Comida: {dato.food}</Text>
              <Text style={styles.label}>Agua: {dato.water}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};
