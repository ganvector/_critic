# Generated by Django 2.2.9 on 2020-08-03 00:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('campanha', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Idioma',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('campanha', models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='campanha.Campanha')),
            ],
        ),
        migrations.CreateModel(
            name='Pericia',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(choices=[('PER', 'Persuação'), ('PRE', 'Prestidigitação'), ('ADE', 'Adestrar animais'), ('INT', 'Intuição'), ('INV', 'Investigação'), ('ATL', 'Atletismo'), ('SOB', 'Sobrevivência'), ('FUR', 'Furtividade'), ('HIS', 'História'), ('ARC', 'Arcanismo'), ('REL', 'Religião'), ('ACR', 'Acrobacia'), ('ATU', 'Atuação'), ('ITM', 'Intimidação'), ('MED', 'Medicina'), ('ENG', 'Enganação'), ('PER', 'Percepção'), ('NAT', 'Natureza')], max_length=3)),
            ],
        ),
        migrations.CreateModel(
            name='Proficiencia',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(choices=[('ArdrM', 'Armaduras Médias'), ('ArmaS', 'Armas Simples'), ('ArdrP', 'Armaduras Pesadas'), ('ArdrL', 'Armaduras Leves'), ('ArmaM', 'Armas Marcials')], max_length=5)),
            ],
        ),
        migrations.CreateModel(
            name='Traco',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('descricao', models.TextField()),
                ('campanha', models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='campanha.Campanha')),
            ],
        ),
        migrations.CreateModel(
            name='Raca',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100, null=True)),
                ('bonus_for', models.IntegerField(default=0)),
                ('bonus_des', models.IntegerField(default=0)),
                ('bonus_con', models.IntegerField(default=0)),
                ('bonus_int', models.IntegerField(default=0)),
                ('bonus_sab', models.IntegerField(default=0)),
                ('bonus_car', models.IntegerField(default=0)),
                ('idioma', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='campanha.Idioma')),
                ('tracos', models.ManyToManyField(to='campanha.Traco')),
            ],
        ),
        migrations.CreateModel(
            name='Classe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('campanha', models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='campanha.Campanha')),
                ('pericias', models.ManyToManyField(to='campanha.Pericia')),
                ('proficiencias', models.ManyToManyField(to='campanha.Proficiencia')),
            ],
        ),
    ]
