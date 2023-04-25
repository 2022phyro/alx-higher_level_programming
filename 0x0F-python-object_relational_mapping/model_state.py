#!/usr/bin/python3
"""This module is an introduction to SQLAlchemy.
It uses SQLAlchemy to save to a
certain database and simplfies the whole Query process
by using ORM instead of SQL"""
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class State(Base):
    """This class is actually a table in
    our database. It is a table of states"""

    __tablename__ = 'states'
    id = Column(Integer, primary_key=True)
    name = Column(String(128), nullable=False)
