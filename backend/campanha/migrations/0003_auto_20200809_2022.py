# Generated by Django 2.2.9 on 2020-08-09 20:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('campanha', '0002_classe_idioma_pericia_proficiencia_raca_traco'),
    ]

    operations = [
        migrations.CreateModel(
            name='Aventura',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=200)),
                ('descricao', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Sessao',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=200)),
                ('descricao', models.TextField()),
            ],
        ),
        migrations.AlterField(
            model_name='pericia',
            name='nome',
            field=models.CharField(choices=[('ARC', 'Arcanismo'), ('NAT', 'Natureza'), ('REL', 'Religião'), ('PER', 'Persuação'), ('ADE', 'Adestrar animais'), ('ATU', 'Atuação'), ('PRE', 'Prestidigitação'), ('INV', 'Investigação'), ('MED', 'Medicina'), ('PER', 'Percepção'), ('SOB', 'Sobrevivência'), ('ENG', 'Enganação'), ('HIS', 'História'), ('ACR', 'Acrobacia'), ('ITM', 'Intimidação'), ('FUR', 'Furtividade'), ('ATL', 'Atletismo'), ('INT', 'Intuição')], max_length=3),
        ),
        migrations.AlterField(
            model_name='proficiencia',
            name='nome',
            field=models.CharField(choices=[('ArdrL', 'Armaduras Leves'), ('ArdrP', 'Armaduras Pesadas'), ('ArmaM', 'Armas Marcials'), ('ArmaS', 'Armas Simples'), ('ArdrM', 'Armaduras Médias')], max_length=5),
        ),
    ]
