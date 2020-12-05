# Generated by Django 2.2.9 on 2020-09-06 20:40

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('campanha', '0011_auto_20200823_2155'),
    ]

    operations = [
        migrations.AddField(
            model_name='classe',
            name='dado_de_vida',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='classe',
            name='pericias',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, choices=[('ITM', 'Intimidação'), ('ADE', 'Adestrar animais'), ('NAT', 'Natureza'), ('MED', 'Medicina'), ('ATU', 'Atuação'), ('ENG', 'Enganação'), ('PER', 'Percepção'), ('SOB', 'Sobrevivência'), ('PRE', 'Prestidigitação'), ('INV', 'Investigação'), ('REL', 'Religião'), ('INT', 'Intuição'), ('ACR', 'Acrobacia'), ('0', 'VAZIO'), ('ATL', 'Atletismo'), ('ARC', 'Arcanismo'), ('PRS', 'Persuação'), ('HIS', 'História'), ('FUR', 'Furtividade')], default='0', max_length=3), default=list, size=None),
        ),
        migrations.AlterField(
            model_name='classe',
            name='proficiencias',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, choices=[('ArdrM', 'Armaduras Médias'), ('ArmaS', 'Armas Simples'), ('0', 'VAZIO'), ('Escud', 'Escudos'), ('ArdrP', 'Armaduras Pesadas'), ('ArmaM', 'Armas Marcials'), ('ArdrL', 'Armaduras Leves')], default='0', max_length=5), default=list, size=None),
        ),
        migrations.AlterField(
            model_name='classe',
            name='teste_resistencia',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, choices=[('INT', 'Inteligência'), ('CON', 'Constituição'), ('CAR', 'Carisma'), ('FOR', 'Força'), ('SAB', 'Sabedoria'), ('DES', 'Destreza')], default='0', max_length=3), default=list, max_length=2, size=None),
        ),
    ]
